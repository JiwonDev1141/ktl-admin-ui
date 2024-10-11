import type { Meta, StoryObj } from '@storybook/vue3';

import ConfirmPop from './ConfirmPop.vue';

import sourceCode from './ConfirmPop.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof ConfirmPop> = {
  component: ConfirmPop,
};

export default meta;
type Story = StoryObj<typeof ConfirmPop>;

export const Primary: Story = {
  render: (args) => ({
    components: { ConfirmPop, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <ConfirmPop v-bind="args">{{ args.default }}</ConfirmPop>
    `,
  }),
  args: {
    text: '패스워드를 입력하세요',
  },
};
