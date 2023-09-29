import React, { useState, useEffect, useRef } from 'react'

export const LoadingInfiniteScrolled = ({ render, fetchMore = true, callback = () => {} }) => {
    const loadingRef = useRef()

    const useOnScreen = ref => {
        const [isIntersecting, setIsIntersecting] = useState(false)

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting)
        )

        useEffect(() => {
            if (ref.current) observer.observe(ref.current)
            // Remove the observer as soon as the component is unmounted
            return () => { observer.disconnect() }
        }, [ref, observer])

        return isIntersecting
    }

    const isVisible = useOnScreen(loadingRef)

    useEffect(() => {
        if (isVisible && fetchMore) callback()
    }, [isVisible, callback, fetchMore])

    return <div ref={loadingRef}>
        {isVisible && fetchMore ? render || <div style={{ background: 'red' }} >Loading...</div> : <></>}
    </div>
}

// Usemode
// {i === state.products?.length -1 && <LoadingInfiniteScrolled fetchMore={state.fetchMore} callback={onFetchMore} render={<LoadingCardItem />} />}