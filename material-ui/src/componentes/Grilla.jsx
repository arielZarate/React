import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Grilla() {
  return (

    <>
      <Container>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
            quisquam minima provident, ad magnam saepe impedit voluptatem
            ratione quas molestias! Nisi.
          </p>
        </Grid>
      </Grid>
    </Container>
    <br />


 <div>

 
 </div>
  
    </>
  
  );
}
