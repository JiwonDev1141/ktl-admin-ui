import type { Meta, StoryObj } from '@storybook/vue3';

import PasswordInput from './PasswordInput.vue';

import sourceCode from './PasswordInput.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Primary: Story = {
  render: (args) => ({
    components: { PasswordInput, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <PasswordInput v-bind="args">{{ args.default }}</PasswordInput>`,
  }),
  args: {
    placeholder: '패스워드를 입력하세요',
    applyHideBtn: true,
  },
};
