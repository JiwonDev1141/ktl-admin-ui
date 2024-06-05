import type { Meta, StoryObj } from '@storybook/vue3';

import KanbanBoard from './KanbanBoard.vue';

import sourceCode from './KanbanBoard.vue?raw';

const meta: Meta<typeof KanbanBoard> = {
  component: KanbanBoard,
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

export const Primary: Story = {
  render: (args) => ({
    components: { KanbanBoard },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <textarea disabled='true' class='w-full h-full px-10 py-4 bg-gray-800 text-green-400 rounded-md'>{{sourceCode}}</textarea>
    </div>
    <KanbanBoard v-bind="args" />
    `,
  }),
  args: {
    title: '작업 1',
    description: '작업에 대한 설명..',
    date: new Date().toLocaleDateString(),
  },
};
