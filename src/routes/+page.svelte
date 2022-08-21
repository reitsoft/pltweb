<script>
	import { Button, Tile, Grid, Row, Column } from "carbon-components-svelte";
</script>

<h2>Dashboard</h2>
<Grid fullWidth>
	<Row>
		<Column sm={12} md={12} lg={6}>
			<Tile>
				Default tile
				<Button>Primary button</Button>
			</Tile>
		</Column>
		<Column>Column</Column>
		<Column>Column</Column>
		<Column>Column</Column>
	</Row>
</Grid>
