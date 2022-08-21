<script>
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		DataTable,
		Loading,
		Pagination,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		Tile,
		Grid,
		Row,
		Column,
		Button,
		Dropdown,
		Search
	} from 'carbon-components-svelte';
	import GridIcon from 'carbon-icons-svelte/lib/Grid.svelte';

	import fetchData from "$lib/functions/fetchDataFromAPI"
	import onSearchTable from '$lib/functions/onSearchTable';
	import fillDropdown from "$lib/functions/fillDropdown"
	import safeAsExcel from '$lib/functions/safeAsExcel';

	import { anlagenStore } from '$lib/store';
	import { header } from './data';
	import dummyData from './dummyData';

	let anlagen = [];
	let searchResult = [];
	let searchText = '';

	function onSearch() {
		$anlagenStore = onSearchTable(dummyData, searchText);
		Pagination.page = 1;
	}

	onMount(async () => {
		// anlagen = await fetchData("http://frdc00979:3000/anlagen")
		$anlagenStore = dummyData; //übergabe anlagen an $anlagenStore
	});
</script>

{#if $navigating}
	<Loading />
{:else}
	<h2>Anlagen</h2>
	<br />

	<Tile>
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
						items={fillDropdown(dummyData, "SCADA")}
					/></Column
				>
				<Column sm={4} md={4} lg={2}>
					<Dropdown
						selectedId="0"
						items={fillDropdown(dummyData, "Werk")}
					/></Column
				>
				<Column sm={4} md={4} lg={2}>
					<Dropdown
						selectedId="0"
						items={fillDropdown(dummyData, "Gebäude")}
					/></Column
				>
				<Column sm={4} md={4} lg={2}>
					<Dropdown
						selectedId="0"
						items={fillDropdown(dummyData, "kanal")}
					/></Column
				>
				<Column sm={4} md={4} lg={2}>
					<Dropdown
						selectedId="0"
						items={fillDropdown(dummyData, "fehler")}
					/></Column
				>
				<Column sm={4} md={4} lg={3}>
					<Button
						icon={GridIcon}
						on:click={() => safeAsExcel($anlagenStore, 'export_SCADA-Anlagen')}
						>Download als Excel</Button
					>
				</Column>
			</Row>
		</Grid>
	</Tile>

	<DataTable
		zebra
		sortable
		size="compact"
		headers={header}
		pageSize={28}
		page={Pagination.page}
		rows={$anlagenStore}
	/>

	<Pagination
		pageSize={28}
		bind:page={Pagination.page}
		totalItems={$anlagenStore.length}
		pageInputDisabled
		pageSizeInputDisabled
	/>
{/if}
