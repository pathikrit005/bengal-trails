import React, { useState, useEffect } from "react";

/**
 * ImageWithFallback
 * - props.src can be string | string[] (candidates)
 * - tries candidates sequentially until one loads successfully
 * - shows placeholder if none load (and also while trying to avoid layout shift)
 *
 * Minor, safe improvements:
 * - consistent deps for effects
 * - proper cleanup
 * - keeps forwarding className/style (so CSS/design won't break)
 */

const PLACEHOLDER = "/images/placeholder.jpg"; // <-- ensure this file exists in public/images/ (or change to /image/..)

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string | string[] | undefined;
  alt?: string;
  tryDelay?: number; // optional small delay between tries (ms)
  placeholder?: string; // optional custom placeholder
};

export function ImageWithFallback({
  src,
  alt,
  tryDelay = 50,
  placeholder,
  className,
  style,
  ...rest
}: ImgProps) {
  const [current, setCurrent] = useState<string | null>(null);
  const [didFail, setDidFail] = useState(false);

  // normalize src -> array of candidates
  const candidates: string[] = React.useMemo(() => {
    if (!src) return [];
    return Array.isArray(src) ? src : [src];
  }, [src]);

  // reset when src changes
  useEffect(() => {
    setCurrent(null);
    setDidFail(false);
  }, [src]);

  useEffect(() => {
    if (!candidates || candidates.length === 0) {
      setDidFail(true);
      return;
    }

    let cancelled = false;
    let img: HTMLImageElement | null = null;

    const tryLoad = (i: number) => {
      if (cancelled) return;
      if (i >= candidates.length) {
        setDidFail(true);
        return;
      }
      const url = candidates[i];
      img = new Image();
      img.onload = () => {
        if (cancelled) return;
        setCurrent(url);
        setDidFail(false);
      };
      img.onerror = () => {
        // try next after tiny delay
        setTimeout(() => {
          if (cancelled) return;
          tryLoad(i + 1);
        }, tryDelay);
      };
      // kick off
      img.src = url;
    };

    tryLoad(0);

    return () => {
      cancelled = true;
      if (img) {
        img.onload = null;
        img.onerror = null;
      }
    };
    // depend on stable string representation of candidates + tryDelay
  }, [candidates.join("|"), tryDelay]);

  // final src: use found current OR placeholder (while loading and on fail)
  const finalSrc = current ?? (placeholder ?? PLACEHOLDER);

  // render image — forwarding className/style so design remains unchanged
  // keep alt for accessibility; loading lazy + decoding async for perf
  return (
    <img
      src={finalSrc}
      alt={alt ?? ""}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
}

export default ImageWithFallback;
