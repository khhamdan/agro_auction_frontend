import * as yup from "yup";

export const bidSchema = yup.object({
  reserve: yup.number(),
  price: yup.number().required().moreThan(yup.ref("reserve")),
});
