import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function CardComponent({ text, description, link, image }) {
  const { t } = useTranslation('global');

  return (
    <Card sx={{ maxWidth: 345 }} className="landing-card">
      <CardActionArea>
        <CardMedia
          component="img"
          style={{
            height: 140,
            width: 140,
            justifySelf: 'center',
            display: 'flex',
            margin: '0 auto',
          }}
          image={image}
          alt="green iguana"
        />
        <CardContent
          style={{
            height: 140,
            marginTop: 10,
          }}
        >
          <Typography gutterBottom variant="h5" component="h5">
            {text}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={link}>
          <Button className="landing-box-button">
            {t('global.HomePage.explore')}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
