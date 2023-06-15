import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  tool_id: yup.string().nullable().required(),
  outlet_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
