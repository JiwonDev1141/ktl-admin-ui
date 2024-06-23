import type { Meta, StoryObj } from '@storybook/vue3';

import ProgressBar from './ProgressBar.vue';

import CodeMirror from './common/CodeMirror.vue';

import sourceCode from './ProgressBar.vue?raw';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  render: (args) => ({
    components: { ProgressBar, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <ProgressBar v-bind="args">{{ args.default }}</ProgressBar>
    `,
  }),
  args: {},
};
