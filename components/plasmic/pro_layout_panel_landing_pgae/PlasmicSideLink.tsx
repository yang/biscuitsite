// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: Erbgmri1tY
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "./plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicSideLink.module.css"; // plasmic-import: Erbgmri1tY/css

import Vector19Icon from "./icons/PlasmicIcon__Vector19"; // plasmic-import: KN1g5LXUG/icon

export type PlasmicSideLink__VariantMembers = {};

export type PlasmicSideLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicSideLink__VariantsArgs;
export const PlasmicSideLink__VariantProps = new Array<VariantPropType>();

export type PlasmicSideLink__ArgsType = {
  children?: React.ReactNode;
  destination?: string;
};

type ArgPropType = keyof PlasmicSideLink__ArgsType;
export const PlasmicSideLink__ArgProps = new Array<ArgPropType>(
  "children",
  "destination"
);

export type PlasmicSideLink__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSideLinkProps {
  children?: React.ReactNode;
  destination?: string;
  className?: string;
}

function PlasmicSideLink__RenderFunc(props: {
  variants: PlasmicSideLink__VariantsArgs;
  args: PlasmicSideLink__ArgsType;
  overrides: PlasmicSideLink__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    true ? (
      <p.PlasmicLink
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.a,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_outline_to_single_stroke_css.plasmic_tokens,
          sty.root
        )}
        component={Link}
        href={args.destination}
        platform={"nextjs"}
        target={"_blank" as const}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Vector19Icon
              className={classNames(projectcss.all, sty.svg___4Os65)}
              role={"img"}
            />
          ),

          value: args.children
        })}
      </p.PlasmicLink>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideLink__VariantsArgs;
    args?: PlasmicSideLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSideLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSideLink__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSideLink__ArgProps,
          internalVariantPropNames: PlasmicSideLink__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSideLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideLink";
  } else {
    func.displayName = `PlasmicSideLink.${nodeName}`;
  }
  return func;
}

export const PlasmicSideLink = Object.assign(
  // Top-level PlasmicSideLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSideLink
    internalVariantProps: PlasmicSideLink__VariantProps,
    internalArgProps: PlasmicSideLink__ArgProps
  }
);

export default PlasmicSideLink;
/* prettier-ignore-end */
