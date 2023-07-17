import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';

export function ProjectList({ proj }) {
  return (
    <div className='proj-d'>
      <Card className='movie-container'>
        <div className='proj-head'>
          <img className='proj-img' src={proj.image} />
          <CardContent>
            <div className='proj-cnt'>
              <h3 className='proj-name'>{proj.name}</h3>
              <p className='proj-details'>{proj.details}</p>
            </div>
          </CardContent>
          <Button href={proj.link} className='proj-but cnt-but'>Project</Button>
        </div>
      </Card>
    </div>
  );
}
