import styled from "styled-components"
import CloseIcon from '@material-ui/icons/Close';

const PostModal =(props) =>{
    return(
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <CloseIcon />
                    </button>
                </Header>
            </Content>
        </Container>
    )
}




const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:9999;
    color:black;
    background-color:rgba(0,0,0,0.8);
`;

const Content = styled.div`
    width:100%;
    max-width:552px;
    background-color:white;
    max-height:90%;
    overflow:initial;
    border-radius:5px;
    position: relative;
    display:flex;
    flex-direction:column;
    top:32px;
    margin:0 auto;

`;

const Header = styled.div`
    display:block;
    padding:16px 20px;
    border-bottom:1px solid rgba(0,0,0,0.15);
    font-size:16px;
    line-height:1.5;
    color:rgba(0,0,0,0.6);
    font-weight:100;
    display:flex;
    justify-content:space-between;
    align-items:center;

    button{
        height:40px;
        width:40px;
        min-width:auto;
        color:rgba(0,0,0,0.15);
            
            svg{
                pointer-events:none;
            }
       
    }

`;


export default PostModal;