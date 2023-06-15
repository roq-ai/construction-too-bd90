import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  duration: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
