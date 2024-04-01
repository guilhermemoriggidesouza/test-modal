import { useEffect } from 'react'
import './styles.css'
import ReactDOM from 'react-dom'

export function Modal({ isOpen, onClose }: { isOpen: Boolean, onClose: () => void }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) { return null }

    return ReactDOM.createPortal(
        <>
            <div className="modal-bg" onClick={onClose}></div>
            <div className="modal-content">its me, hi, im the problem its me</div>
        </>,
        document.body
    )

}