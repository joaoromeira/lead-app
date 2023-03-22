import { ChangeEvent, FormEvent, useState } from 'react';

import { User } from '@core/domain/dtos/user';
import { useCreateUser } from '@presentation/hooks/use-create-user';

import { Button } from '../button/button';
import { ErrorAlert } from '../error-alert/error-alert';
import { TextInput } from '../text-input/text-input';

type FormState = Omit<User, 'id'>;

type UserFormProps = {
  onSave?: () => void;
};

const INITIAL_STATE_FORM = {
  email: '',
  name: '',
};

export const UserForm = ({ onSave }: UserFormProps): JSX.Element => {
  const [form, setForm] = useState<FormState>(INITIAL_STATE_FORM);
  const [hasError, setHasError] = useState<boolean>(false);

  const createUserSuccessCallback = () => {
    if (onSave) onSave();

    setForm(INITIAL_STATE_FORM);
  };

  const createUser = useCreateUser({
    cb: {
      success: createUserSuccessCallback,
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /**
     * The correct way is move this to use case layer and do custom VOs
     */
    const { email, name } = form;

    if (email === '' || name === '') {
      setHasError(true);
    } else {
      createUser.mutate(form);
    }
  };

  const handleChangeTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (hasError) setHasError(false);

    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  return (
    <>
      <form className="row mb-4 flex items-end gap-4" onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          name="name"
          placeholder="João"
          value={form.name}
          onChange={handleChangeTextInput}
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="joao@example.com"
          value={form.email}
          onChange={handleChangeTextInput}
        />
        <Button text="Save" type="submit" isLoading={createUser.isLoading} />
      </form>
      {hasError && <ErrorAlert message="Please fill in all fields" />}
    </>
  );
};
