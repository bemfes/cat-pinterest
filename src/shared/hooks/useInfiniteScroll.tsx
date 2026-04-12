import { useEffect } from "react"

interface UseInfiniteScrollParams<T> {
    loading: boolean;
    data: T[];
    count: number;
    callback: () => void;
    observedEl: React.RefObject<HTMLElement | null>;
    thresholdNumber: number;
}

export const useInfiniteScroll = <T,>({ loading, data, count, callback, observedEl, thresholdNumber }: UseInfiniteScrollParams<T>) => {
   useEffect(() => {
      if (loading) return
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data.length < count) {
          callback()
        }
      }, { threshold: thresholdNumber })
      const current = observedEl.current
      if (current) observer.observe(current)
      return () => observer.disconnect()
    }, [loading, data, count])
    
}


