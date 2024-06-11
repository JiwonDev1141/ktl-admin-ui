import type { Meta, StoryObj } from '@storybook/vue3';

import FormInput from './FormInput.vue';

import sourceCode from './FormInput.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof FormInput> = {
  component: FormInput,
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Primary: Story = {
  render: (args) => ({
    components: { FormInput, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <FormInput v-bind="args">{{ args.default }}</FormInput>
    `,
  }),
  args: {
    placeholder: '패스워드를 입력하세요',
  },
};
