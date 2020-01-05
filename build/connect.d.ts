import { FunctionComponent, VNode } from 'preact';
import { ActionsObject, SelectorFn } from './types';
export declare const connect: (selector?: SelectorFn, actions?: ActionsObject) => (component: FunctionComponent<{}>) => () => VNode<any>;
