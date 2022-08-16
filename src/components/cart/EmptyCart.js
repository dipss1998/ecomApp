import { Typography, Box , Grid} from '@mui/material';
import { styled } from '@mui/material/styles';

const Component = styled(Grid)`
    width: 80%;
    height: 65vh;
    background: #f2f2f2;
    margin: 80px auto;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
    margin-Left: 90px 
`;

const Image = styled('img')({
    width: '15%'
});


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <Component container >
            <Container>
                <Image src={imgurl} />
                <Typography>Your cart is empty!</Typography>
                <Typography component="span">Add items to it now.</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;