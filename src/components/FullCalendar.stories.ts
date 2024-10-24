import type { Meta, StoryObj } from '@storybook/vue3';

import { ref } from 'vue';

import FullCalendar from './FullCalendar.vue';

import sourceCode from './FullCalendar.vue?raw';

import CodeMirror from './common/CodeMirror.vue';

import dayjs from 'dayjs'

/**
 * 타입 선언의 영역입니다.
 */
const meta: Meta<typeof FullCalendar> = {
  component: FullCalendar,
};

export default meta;
type Story = StoryObj<typeof FullCalendar>;

export const Primary: Story = {
  render: (args) => ({
    components: { FullCalendar, CodeMirror },
    setup() {
      const codeMirrorRef = ref();

      const hideCodeMirror = (e) => {
        if( e.target.nextSibling.style.display != 'none') {
            e.target.nextSibling.style.display = 'none'
        }
        else {
            e.target.nextSibling.style.display = 'block'
        }
    };
   

      return { args, sourceCode, codeMirrorRef, hideCodeMirror };
    },
    template: `
    <div class='flex justify-center absolute right-0 w-1/2 h-full pr-2'>
    <em class='cursor-pointer' @click='hideCodeMirror'>Code Preview</em>
    <CodeMirror ref='codeMirrorRef' :sourceCode=sourceCode />
    </div>
    <FullCalendar v-bind="args">{{ args.default }}</FullCalendar>
    `,
  }),
  args: {
    events: [
        {
            title: '',
            date: dayjs().add(1, 'day').format(),
            color: 'black'
        }
    ]
  },
};
