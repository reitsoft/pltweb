<script>
	import { Button, Dropdown, Grid, Row, Column, Search } from 'carbon-components-svelte';
	import GridIcon from 'carbon-icons-svelte/lib/Grid.svelte';

	import onSearchTable from '$lib/functions/onSearchTable';
	import safeAsExcel from '$lib/functions/safeAsExcel';

  import { anlagenStore } from '$lib/store';
  export let searchText;
</script>

<Grid fullWidth narrow>
	<Row>
		<Column sm={4} md={6} lg={3}>Suchen</Column>
		<Column sm={4} md={4} lg={2}>SCADA</Column>
		<Column sm={4} md={4} lg={2}>Werk</Column>
		<Column sm={4} md={4} lg={2}>Gebäude</Column>
		<Column sm={4} md={4} lg={2}>Kanal</Column>
		<Column sm={4} md={4} lg={2}>Status</Column>
	</Row>
	<Row>
		<Column sm={4} md={6} lg={3}>
			<Search
				labelText="Suchen"
				placeholder="Suchen .."
				size="lg"
				bind:value={searchText}
				on:input={onSearch}
				on:clear={onSearch}
			/>
		</Column>
		<Column sm={4} md={4} lg={2}>
			<Dropdown
				selectedId="0"
				items={[
					{ id: '0', text: 'Alle' },
					{ id: '1', text: 'Email' },
					{ id: '2', text: 'Fax' }
				]}
			/></Column
		>
		<Column sm={4} md={4} lg={2}>
			<Dropdown
				selectedId="0"
				items={[
					{ id: '0', text: 'Alle' },
					{ id: '1', text: 'Email' },
					{ id: '2', text: 'Fax' }
				]}
			/></Column
		>
		<Column sm={4} md={4} lg={2}>
			<Dropdown
				selectedId="0"
				items={[
					{ id: '0', text: 'Alle' },
					{ id: '1', text: 'Email' },
					{ id: '2', text: 'Fax' }
				]}
			/></Column
		>
		<Column sm={4} md={4} lg={2}>
			<Dropdown
				selectedId="0"
				items={[
					{ id: '0', text: 'Alle' },
					{ id: '1', text: 'Email' },
					{ id: '2', text: 'Fax' }
				]}
			/></Column
		>
		<Column sm={4} md={4} lg={2}>
			<Dropdown
				selectedId="0"
				items={[
					{ id: '0', text: 'Alle' },
					{ id: '1', text: 'OK' },
					{ id: '2', text: 'FEHLER' }
				]}
			/></Column
		>
		<Column sm={4} md={4} lg={3}>
			<Button icon={GridIcon} on:click={() => safeAsExcel($anlagenStore, 'export_SCADA-Anlagen')}
				>Download als Excel</Button
			>
		</Column>
	</Row>
</Grid>
