const express = require('express'),
morgan = require('morgan');

const app = express(); 

let topMovies = [
  {
    Name: 'The Shawshank Redemption',
    Director: 'Frank Darabont'
  },
  {
    Name: 'The Godfather',
    Director: 'Francis Ford Coppola',
  },
  {
    Name: 'The Dark Knight',
    Director: 'Christopher Nolan',
  },
  {
    Name: 'The Godfather Part 2',
    Director: 'Francis Ford Coppola',
  },
  {
    Name: '12 Angry Men',
    Director: 'Sidney Lumet',
  },
  {
    Name: 'Schindler\'s List',
    Director: 'Steven Spielberg',
  },
  {
    Name: 'The Lord of the Rings: The Return of the King',
    Director: 'Peter Jackson',
  },
  {
    Name: 'Pulp Fiction',
    Director: 'Quentin Tarantino',
  },
  {
    Name: 'The Lord of the Rings: The Fellowship of the Ring',
    Director: 'Peter Jackson',
  },
  {
    Name: 'The Good, the Bad and the Ugly',
    Director: 'Sergio Leone',
  }
];


app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(8080, () => {
  console.log('Listening on port 8080.')
});