import { Lead } from '@core/domain/dtos/lead';
import { useDeleteLead } from '@core/presentation/hooks/use-delete-lead';
import {
  DeleteButton,
  Table,
  TableCells,
  LeadForm,
} from '@presentation/components';
import { useListLeads } from '@presentation/hooks/use-list-leads';
import Head from 'next/head';
import { toast } from 'react-toastify';

const Home = (): JSX.Element => {
  const listLeads = useListLeads();
  const deleteLead = useDeleteLead();

  const handleClickDelete = (lead: Lead) => {
    deleteLead.mutate(lead, {
      onSuccess: () => {
        toast.success('Lead successfully deleted!');
        listLeads.refetch();
      },
      onError: () => {
        toast.error('Error when try delete lead');
      },
    });
  };

  const cells: TableCells<Lead> = [
    {
      label: 'Id',
      content: (lead) => lead.id.toString(),
    },
    {
      label: 'Name',
      content: (lead) => lead.name,
    },
    {
      label: 'Email',
      content: (lead) => lead.email,
    },
    {
      label: 'Actions',
      content: (lead) => (
        <DeleteButton
          data-testid={`button-delete-${lead.email}`}
          data-cy={`button-delete-${lead.email}`}
          onClick={() => handleClickDelete(lead)}
        />
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Lead list</title>
        <meta name="description" content="List lead control." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center">
          <div className="w-3/5 p-8">
            <h1 className="pb-2 text-3xl font-bold">Lead list</h1>
            <LeadForm onSave={listLeads.refetch} />
            <Table
              cells={cells}
              isLoading={listLeads.isFetching}
              isUpdating={deleteLead.isLoading}
              rows={listLeads.data}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
