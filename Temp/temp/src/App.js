import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

var visitors = 500;
var businesses = new Array(100).fill(0);
let neighbourhood = 1;

var problem1 = function() {
  let special = [4, 8, 17, 25, 32, 47, 62, 69, 74, 88, 92];
  var i = 0;
  while (i != special.length) {
      if (visitors - 10 > 0) {
          businesses[special[i]] = 10;
          visitors = visitors - 10;
          i += 1;
      } else {
          businesses[i] = visitors;
          visitors = 0;
          i = special.length
      }
  }
  console.log(visitors);
  if (visitors == 0) {
      return businesses;
  }

  let rest = Math.round(visitors / (businesses.length - special.length));
  var extra = visitors - (rest * (businesses.length - special.length));
  for (let j = 0; j < businesses.length; j++) {
      if (businesses[j] == 0) {
          businesses[j] = rest;
          if (extra != 0) {
              if (extra < 0) {
                  businesses[i] = rest - 1;
                  extra += 1;
              } else {
                  businesses[i] = rest + 1;
                  extra -= 1;
              }
          }
      }
  }
  return businesses;
};

// var problem2 = function() {
//   let initialDis = visitors / businesses.length;
//   for (let i = 0; i < businesses.length; i++) {
//     businesses[i] = initialDis;
//   }

//   let index = parseInt(prompt("Enter index: "));
//   var extraVisiter = parseInt(prompt("Enter extra Visitors: "));
//   if (extraVisiter < 10) {
//     businesses[index] += extraVisiter;
//     return businesses;
//   } else {
//     businesses[index] += 10;
//     extraVisiter -= 10;
//     let atLeast = Math.round(extraVisiter / businesses.length);
//     var extra = extraVisiter - (atLeast * businesses.length)
//     for (let j = 0; j < businesses.length; j++) {
//         if (extra < 0) {
//             if (j != index) {
//               businesses[j] -= 1;
//               extra += 1; 
//             }
//         } else if (extra > 0) {
//             businesses[j] += 1;
//             extra -= 1;
//         }
//         businesses[j] += atLeast;
//     }
//   }
//   return businesses;
// }

const theme = createTheme();

function App() {
  let initialDis = visitors / businesses.length;
  for (let i = 0; i < businesses.length; i++) {
    businesses[i] = initialDis;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('index') == '' || data.get('extraVisitor') == '') {
      console.log("invalid input")
      return
    }
    problem2(parseInt(data.get('index')), parseInt(data.get('extraVisitor')));
  };

  var start = 0;
  var problem2 = function(i, e) {
    let index = i;
    var extraVisiter = e;
    if (businesses[index] < 10) {
      const numForTen = 10 - businesses[index];
      if (numForTen < extraVisiter) {
        extraVisiter -= numForTen;
        businesses[index] += numForTen;
      } else {
        businesses[index] += extraVisiter;
        console.log(businesses)
        return
      }
    }
    let atLeast = Math.round(extraVisiter / businesses.length);
    var extra = extraVisiter - (atLeast * businesses.length);
    if (extraVisiter < businesses.length) {
      while(extraVisiter > 0) {
        businesses[start] += 1;
        extraVisiter -= 1;
        start += 1;
        if (start == businesses.length) {
          start = 0;
        }
      }
    } else {
      for (let j = 0; j < businesses.length; j++) {
        if (extra < 0) {
            if (j != index) {
              businesses[j] -= 1;
              extra += 1; 
            }
        } else if (extra > 0) {
            businesses[j] += 1;
            extra -= 1;
        }
        businesses[j] += atLeast;
      }
    }
    console.log(businesses)
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Visitor Distributer
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="number"
              label="index"
              name="index"
              InputProps={{ inputProps: { min: 0, max: 49 } }}
              autoFocus
            />
            <TextField
              InputProps={{ inputProps: { min: 0 } }}
              margin="normal"
              required
              fullWidth
              type="number"
              name="extraVisitor"
              label="Extra Visitor"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Distribute
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;
