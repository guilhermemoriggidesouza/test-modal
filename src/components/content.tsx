export default function Content({ text, onClick }: { text: string, onClick: () => void }) {
    return (
        <>
            <button onClick={onClick}>Click to Open</button>
            <p>{text}</p>
        </>
    )
}