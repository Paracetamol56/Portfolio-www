<template>
	<section id="projects">
		<div class="container">
			<div class="projet-list">
				<ProjectCard
					v-for="project in projects"
					:key="project"
					:project="project"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import ProjectCard from "@/components/miscellaneous/ProjectCard.vue";

import axios from "axios";

export default {
	name: "ProjectListSection",
	components: {
		ProjectCard,
	},
	data: function () {
		return {
			projects: [],
		};
	},
	methods: {
		loadProjects: function () {
			axios
				.get(`/data/${this.$i18n.locale}_projects.json`)
				.then((response) => {
					this.projects = response.data.reverse();
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	created: function () {
		// Load projects
		this.loadProjects();

		// Watch this.$i18n.locale to update the project
		this.$watch("$i18n.locale", () => {
			this.loadProjects();
		});
	},
};
</script>

<style scoped lang="scss">
section#projects {
	.projet-list {
		margin: 0;
		padding: 0;
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		> * {
			margin-bottom: 1rem;
		}
		> *:last-child {
			margin-bottom: 0;
		}
	}
}
</style>