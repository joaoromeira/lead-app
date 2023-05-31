import { Lead } from '@core/domain/dtos/lead';
import { useCreateLead } from '@presentation/hooks/use-create-lead';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button } from '../button/button';
import { TextInput } from '../text-input/text-input';

type LeadFormProps = {
  onSave?: () => void;
};

export const LeadForm = ({ onSave }: LeadFormProps): JSX.Element => {
  const createLead = useCreateLead();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
    }),
    onSubmit: (values) => {
      createLead.mutate(values, {
        onSuccess: () => {
          if (onSave) onSave();

          formik.resetForm();
          toast.success('Lead successfully saved!');
        },
        onError: (error: any) => {
          toast.error(error.message);
        },
      });
    },
  });

  return (
    <div className="row mb-4 flex items-start gap-4">
      <div className="row flex items-start gap-4">
        <TextInput
          label="Name"
          name="name"
          placeholder="João"
          data-cy="text-input-name"
          value={formik.values.name}
          onChange={formik.handleChange}
          errorMessage={formik.errors.name}
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          data-cy="text-input-email"
          placeholder="joao@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          errorMessage={formik.errors.email}
        />
      </div>
      <div className="pt-7">
        <Button
          text="Save"
          data-cy="button-save"
          data-testid="button-save"
          onClick={formik.submitForm}
          isLoading={createLead.isLoading}
        />
      </div>
    </div>
  );
};
