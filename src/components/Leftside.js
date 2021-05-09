import styled from "styled-components"

const Leftside =(props) =>{
    return(
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground/>
                    <a>
                        <Photo/>
                        <Link>Welcome, there!</Link>
                    </a>
                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
            </ArtCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area:leftside;
`;

const ArtCard = styled.div`
    text-align:center;
    overflow:hidden;
    margin-bottom:8px;
    background-color:#fff;
    border-radius:5px;
    transition:box-shadow 83px;
    position: relative;
    border:none;
    box-shadow:0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/20%);
`;

const UserInfo = styled.div``;

const CardBackground = styled.div``;

const Photo = styled.div``;

const Link = styled.div``;

const AddPhotoText = styled.div``;

export default Leftside;