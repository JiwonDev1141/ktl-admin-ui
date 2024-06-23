import type { Meta, StoryObj } from '@storybook/vue3';

import EnergyChart from './EnergyChart.vue';

import sourceCode from './EnergyChart.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof EnergyChart> = {
  component: EnergyChart,
};

export default meta;
type Story = StoryObj<typeof EnergyChart>;

export const Primary: Story = {
  render: (args) => ({
    components: { EnergyChart, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <EnergyChart v-bind="args">{{ args.default }}</EnergyChart>`,
  }),
  args: {
    color: 'blue',
    name: '체크박스',
  },
};
