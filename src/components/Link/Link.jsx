import styled from "styled-components";

const LinksElem = styled.a`
font-weight: 700;
display: inline-block;
background: #EEE;
padding: 1rem;
text-tranform: uppercase;
user-select: none;
font-family: Arial, sans-serif; 
border: 1px solid #CCC;
border-radius: 4px;
text-decoration: none;
text-align: center;
white-space: nowrap;
width: ${props => !!props.fullWidth? "100%" : "auto"};
cursor: ${props => props.disabled? "not-allowed" : "pointer"};
 color: ${props => props.disabled? "#999" : "#222"};

 &:hover{
     background: ${props => props.disabled? "#EEE" : "#BBB"};
 }

 &:active{
     background: ${props => props.disabled? "#EEE" : "#999   "};
 }
`
const Link = (props) => {
const {children, disabled, url, fullWidth} = props;
return<LinksElem 
fullWidth = {fullWidth}    
 href={disabled ? undefined : url}
  disabled = {disabled}
  >
    {children}
</LinksElem>
}
export default Link;