export default function MarqueeComponent({ children, style, ...props }) {
    return (
        <marquee style={style} {...props}>
            {children}
        </marquee>
    );
}
