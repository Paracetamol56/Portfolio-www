<script lang="ts" setup>
import { ExternalLink } from "lucide-vue-next";
import { defineProps } from "vue";

const props = defineProps({
	number: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<section id="formations">
		<div class="container">
			<div class="section-title fade-in">
				<h2>
					<span class="section-title-number">{{ number }}.</span>
					{{ $t("about.formation.title") }}
				</h2>
				<hr />
			</div>
			<ul class="formation-list">
				<li class="formation-item fade-in" v-for="(num, index) in 5" :key="index">
					<div class="formation-item-timeline">
						<p class="formation-start-date">{{ $t(`about.formation.${num}.end`) }}</p>
						<span class="formation-start-date-separator"></span>
						<p class="formation-end-date">{{ $t(`about.formation.${num}.start`) }}</p>
					</div>
					<div class="formatioon-item-content">
						<h3 class="formation-title">{{ $t(`about.formation.${num}.title`) }}</h3>
						<p class="formation-school">{{ $t(`about.formation.${num}.school`) }}</p>
						<p class="formation-description">
							/*<br />
							<b>Skills acquired:</b>
							<ul style="list-style: none;">
								<li v-for="(skill, index) in $t(`about.formation.${num}.description`).split(';')" :key="index">
									{{ skill }}
								</li>
							</ul>
							*/
						</p>
						<a
							class="formation-link"
							:href="$t(`about.formation.${num}.link`)"
							target="_blank"
						>
							{{ $t("about.formation.school-button") }}
							<ExternalLink size="16" />
						</a>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
ul.formation-list {
	list-style: none;
	padding: 0;
	margin-top: 3rem;
	li.formation-item {
		display: flex;
		flex-direction: row;
		justify-content: stretch;
		align-items: stretch;
		margin-bottom: 2rem;
		p,
		h3 {
			margin: 0.5rem 0;
		}
		.formation-item-timeline {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-right: 1rem;
			p.formation-start-date,
			p.formation-end-date {
				margin: 0;
				color: var(--secondary-color);
			}
			span.formation-start-date-separator {
				width: 2px;
				flex: 1;
				background-color: var(--secondary-color);
			}
		}
		.formatioon-item-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			h3.formation-title {
				margin-top: 0;
			}
			p.formation-description {
				color: var(--comment-color);
			}
			a svg.formation-link-vector {
				height: 1rem;
			}
		}
	}
}
</style>