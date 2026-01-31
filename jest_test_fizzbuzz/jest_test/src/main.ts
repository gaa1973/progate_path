import {fizzbuzz} from "./fizzbuzz";

[...Array(100)].map((_, i) => {
  console.log(fizzbuzz(i));
});
