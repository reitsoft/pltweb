<script>
	import "carbon-components-svelte/css/all.css";
	import {
		Header,
		HeaderUtilities,
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		HeaderPanelLink,
		SideNav,
		SideNavDivider,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SkipToContent,
		Content,
		Theme
	} from "carbon-components-svelte";
	import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
	import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
	import Dashboard from "carbon-icons-svelte/lib/Dashboard.svelte"
	import Screen from "carbon-icons-svelte/lib/Screen.svelte"
	import DataVis_1 from "carbon-icons-svelte/lib/DataVis_1.svelte"
	import DataStructured from "carbon-icons-svelte/lib/DataStructured.svelte"
	import Tools from "carbon-icons-svelte/lib/Tools.svelte"
	import Activity from "carbon-icons-svelte/lib/Activity.svelte"
	
	import { page } from '$app/stores';
	import { currentTheme } from "$lib/store.js";
	// import { zfTheme } from "$lib/theme/zf.js";
	import myTokens from "$lib/theme/tokens.js";


	let isSideNavOpen = false;
	let isOpenUser = false;
	let isOpenSettings = false;
	let isOpenApps = false;
</script>

<svelte:head>
	<title>ZF - PLT-WEB 2.0</title>
</svelte:head>

<Theme bind:theme={$currentTheme} persist persistKey="__carbon-theme" tokens={myTokens} />

<Header company="ZF - " platformName="PLT-WEB 2.0" bind:isSideNavOpen >
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderAction bind:isOpen={isOpenSettings} aria-label="Settings" icon={SettingsAdjust}>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Themes</HeaderPanelDivider>
				<HeaderPanelLink on:click={() => ($currentTheme = "white")}>Light</HeaderPanelLink>
				<HeaderPanelLink on:click={() => ($currentTheme = "g10")}>Gray 10</HeaderPanelLink>
				<HeaderPanelLink on:click={() => ($currentTheme = "g80")}>Gray 80</HeaderPanelLink>
				<HeaderPanelLink on:click={() => ($currentTheme = "g90")}>Gray 90</HeaderPanelLink>
				<HeaderPanelLink on:click={() => ($currentTheme = "g100")}>Dark</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
		<HeaderAction bind:isOpen={isOpenUser} icon={UserAvatarFilledAlt}>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Hallo [user]!</HeaderPanelDivider>
				<HeaderPanelLink>Profil ansehen</HeaderPanelLink>
				<HeaderPanelLink>Meine Beiträge</HeaderPanelLink>

				<HeaderPanelDivider />
				<HeaderPanelLink>Abmelden</HeaderPanelLink>

			</HeaderPanelLinks>
		</HeaderAction>
		<HeaderAction bind:isOpen={isOpenApps}>
			<HeaderPanelLinks>
				<HeaderPanelDivider>Weitere Webtools</HeaderPanelDivider>
				<HeaderPanelLink>Netzwerkantrag</HeaderPanelLink>
				<HeaderPanelLink>Lastmanagement</HeaderPanelLink>
				<HeaderPanelLink>Kameras Login</HeaderPanelLink>
				<HeaderPanelLink>weitere Login Seiten ...</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink icon={Dashboard} href="/" text="Dashboard" isSelected={$page.url.pathname === ("/")} />
		<SideNavDivider />
		<SideNavMenu icon={Screen} text="SCADA">
			<SideNavMenuItem href="/scada/dns-alias" text="DNS - ALIAS" isSelected={$page.url.pathname === "/scada/dns-alias"} />
			<SideNavMenuItem href="/scada/dns-ip" text="DNS - IP" isSelected={$page.url.pathname === "/scada/dns-ip"} />
			<SideNavMenuItem href="/scada/anlagen" text="Anlagen" isSelected={$page.url.pathname === "/scada/anlagen"} />
			<SideNavMenuItem href="/scada/backup" text="Backup" isSelected={$page.url.pathname === "/scada/backup"} />
			<SideNavMenuItem href="/scada/virtuelle-rechner" text="Virtuelle Rechner" isSelected={$page.url.pathname === "/scada/virtuelle-rechner"} />
		</SideNavMenu>
		<SideNavDivider />
		<SideNavMenu icon={DataVis_1} text="iFIX">
			<SideNavMenuItem href="/ifix/systeme" text="Systeme" isSelected={$page.url.pathname === "/ifix/systeme"} />
			<SideNavMenuItem href="/ifix/installationen" text="Installationen" isSelected={$page.url.pathname === "/ifix/installationen"} />
			<SideNavMenuItem href="/ifix/lifechecks" text="LifeChecks" isSelected={$page.url.pathname === "/ifix/lifechecks"} />
			<SideNavMenuItem href="/ifix/lifecheck-freigaben" text="LifeChek Freigaben" isSelected={$page.url.pathname === "/ifix/lifecheck-freigaben"} />
			<SideNavMenuItem href="/ifix/virtuelle-rechner" text="Virtuelle Rechner" isSelected={$page.url.pathname === "/ifix/virtuelle-rechner"} />
		</SideNavMenu>
		<SideNavDivider />
		<SideNavMenu icon={DataStructured} text="dataFEED">
			<SideNavMenuItem href="/datafeed/installationen" text="Installationen" isSelected={$page.url.pathname === "/datafeed/installationen"} />
			<SideNavMenuItem href="/datafeed/lizenzen" text="Lizenzen" isSelected={$page.url.pathname === "/datafeed/lizenzen"} />
		</SideNavMenu>
		<SideNavDivider />
		<SideNavMenu icon={Tools} text="Werkzeuge">
			<SideNavMenuItem href="/werkzeuge/sms-meldungen" text="SMS Meldungen" isSelected={$page.url.pathname === "/werkzeuge/sms-meldungen"} />
			<SideNavMenuItem href="/werkzeuge/logbuch" text="Bereitschaft Logbuch" isSelected={$page.url.pathname === "/werkzeuge/logbuch"} />
			<SideNavMenuItem href="/werkzeuge/wiki" text="PLZ - ZAK Wiki" isSelected={$page.url.pathname === "/werkzeuge/wiki"} />
		</SideNavMenu>
		<SideNavDivider />
		<SideNavLink icon={Activity} href="/vitalwerte" text="Vitalwerte" isSelected={$page.url.pathname === "/vitalwerte"} />
	</SideNavItems>
</SideNav>

<Content>
	<slot />
</Content>
