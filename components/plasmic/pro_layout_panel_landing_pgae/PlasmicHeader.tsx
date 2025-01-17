// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: gCP9N_nn5MCbJS
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
import Button from "../../Button"; // plasmic-import: s3E0QheUTMLIRg/component

import { useScreenVariants as useScreenVariants_3KhhFf1Cq1Qfos } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 3KhhFf1CQ1QFOS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "./plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: gCP9N_nn5MCbJS/css

import ProLayoutPanelsvgIcon from "./icons/PlasmicIcon__ProLayoutPanelsvg"; // plasmic-import: MsE1fZcL1_/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: r_TPt86vHV4SXb/icon

export type PlasmicHeader__VariantMembers = {
  chinese: "chinese";
};

export type PlasmicHeader__VariantsArgs = {
  chinese?: SingleBooleanChoiceArg<"chinese">;
};

type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "chinese"
);

export type PlasmicHeader__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHeaderProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  chinese?: SingleBooleanChoiceArg<"chinese">;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_3KhhFf1Cq1Qfos()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_outline_to_single_stroke_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={`/plp`}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <ProLayoutPanelsvgIcon
              className={classNames(projectcss.all, sty.svg__r6NTn)}
              role={"img"}
            />
          ),

          value: args.children
        })}
      </p.PlasmicLink>

      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___7CZcb)}
        >
          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <div className={classNames(projectcss.all, sty.freeBox__hgUjo)}>
              {p.renderPlasmicSlot({
                defaultContents: "Figma Sections",
                value: args.slot,
                className: classNames(sty.slotTargetSlot)
              })}
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__v8Ufi)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___49HkH
                      )}
                      color={"clear" as const}
                      link={"#feature" as const}
                      size={"compact" as const}
                    >
                      {"Features"}
                    </Button>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__frrPa
                      )}
                      color={"clear" as const}
                      link={"#price" as const}
                      size={"compact" as const}
                    >
                      {"Pricing"}
                    </Button>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___7Jzjx
                      )}
                      color={"clear" as const}
                      size={"compact" as const}
                    >
                      {"中文"}
                    </Button>
                  </React.Fragment>
                ),
                value: args.slot2
              })}
            </div>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
