import type { Meta, StoryObj } from '@storybook/vue3';

import ImageCard from './ImageCard.vue';

import sourceCode from './ImageCard.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

const meta: Meta<typeof ImageCard> = {
  component: ImageCard,
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

export const Primary: Story = {
  render: (args) => ({
    components: { ImageCard, CodeMirror },
    setup() {
      return { args, sourceCode };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em>Code Preview</em>
    <CodeMirror :sourceCode=sourceCode />
    </div>
    <ImageCard v-bind="args" />
    `,
  }),
  args: {
    title: '파쇄기',
    imageSrc: '/assets/image/crusher.png',
    color: '#11B886',
    onClick: () => {},
    isSelected: false,
  },
};
