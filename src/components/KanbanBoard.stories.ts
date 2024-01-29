import type { Meta, StoryObj } from '@storybook/vue3';

import KanbanBoard from './KanbanBoard.vue';

const meta: Meta<typeof KanbanBoard> = {
  component: KanbanBoard,
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

export const Primary: Story = {
  render: (args) => ({
    components: { KanbanBoard },
    setup() {
      return { args };
    },
    template: '<KanbanBoard v-bind="args" />',
  }),
  args: {
    title: '작업 1',
    description: '작업에 대한 설명..',
    date: new Date().toLocaleDateString(),
  },
};
