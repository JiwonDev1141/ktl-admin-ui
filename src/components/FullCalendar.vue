<template>
    <FullCalendar :options="calendarOptions" />
</template>

<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import momentPlugin from '@fullcalendar/moment'

interface EventType {
    title: string;
    date: string;
    color?: string;
}

const props = defineProps({
    events: Array<EventType>
})

const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, momentPlugin],
    initialView: 'dayGridMonth',
    events: props.events,

}




</script>
<style>
.fc-daygrid-day {
    height: 100px !important;
}
</style>
