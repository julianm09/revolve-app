src="/logo.svg"

const LogoUI = styled.img`
    position:absolute;
    left:10px;
    top:10px;
    z-index:2;
    width:100px;
    height:auto;
`;

export const Logo = ({}) => {
    onClick = () => {}
    return (
        <LogoUI onClick={onClick}/>
    )
}

export default Logo;