// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qDNA17RfdgsM73kkELPPxa
// Component: 1s7g74uB-Ej
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
import Header from "../../Header"; // plasmic-import: gCP9N_nn5MCbJS/component
import Button from "../../Button"; // plasmic-import: s3E0QheUTMLIRg/component
import Section from "../../Section"; // plasmic-import: polj06cVBtzpxl/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import VideoExample from "../../VideoExample"; // plasmic-import: AuERE4DOLn/component
import { Iframe } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: CMDBvOhaI4s/codeComponent
import FeatureCard from "../../FeatureCard"; // plasmic-import: 8J_TITQjji4-M9/component
import Plan from "../../Plan"; // plasmic-import: IC0peUQeOrc-TC/component
import Bullet from "../../Bullet"; // plasmic-import: h8iasHjPSdhGL5/component
import Footer from "../../Footer"; // plasmic-import: 48OR7NBtqAcun7/component

import { useScreenVariants as useScreenVariants_3KhhFf1Cq1Qfos } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 3KhhFf1CQ1QFOS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_outline_to_single_stroke_css from "../outline_to_single_stroke/plasmic_outline_to_single_stroke.module.css"; // plasmic-import: 56iVbBJXbx9hFxysoAGHJC/projectcss
import projectcss from "./plasmic_pro_layout_panel_landing_pgae.module.css"; // plasmic-import: qDNA17RfdgsM73kkELPPxa/projectcss
import sty from "./PlasmicHomeChinese.module.css"; // plasmic-import: 1s7g74uB-Ej/css

import ProLayoutPanelsvgIcon from "./icons/PlasmicIcon__ProLayoutPanelsvg"; // plasmic-import: MsE1fZcL1_/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: r_TPt86vHV4SXb/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: FfSoXEgUCW0G_l/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: 3iSPR8gr_8/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: J1YAUdPI6/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: V02xllXpr/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: VcNk7skQWd/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: JfzJrHKPBw/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: cNxJEz4gEG/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: ScoFh1W5NL/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: z0Ji84AyCw/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: ZsRymmi19/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: RQ7qx5lk9P/icon
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: 4PP-eruZ4G/icon

export type PlasmicHomeChinese__VariantMembers = {};

export type PlasmicHomeChinese__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeChinese__VariantsArgs;
export const PlasmicHomeChinese__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeChinese__ArgsType = {};
type ArgPropType = keyof PlasmicHomeChinese__ArgsType;
export const PlasmicHomeChinese__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeChinese__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof Section>;
  img?: p.Flex<typeof p.PlasmicImg>;
  solutions?: p.Flex<typeof Section>;
  howItWorks?: p.Flex<typeof Section>;
  pricingSection?: p.Flex<typeof Section>;
  pricing?: p.Flex<"a"> & Partial<LinkProps>;
  columns?: p.Flex<"div">;
  howItWorks2?: p.Flex<typeof Section>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeChineseProps {}

function PlasmicHomeChinese__RenderFunc(props: {
  variants: PlasmicHomeChinese__VariantsArgs;
  args: PlasmicHomeChinese__ArgsType;
  overrides: PlasmicHomeChinese__OverridesType;

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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            chinese={true}
            className={classNames("__wab_instance", sty.header)}
            slot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xYk9Z
                )}
              >
                {"Pro Layout Panel"}
              </div>
            }
            slot2={
              <React.Fragment>
                <Button
                  className={classNames("__wab_instance", sty.button__awtOp)}
                  color={"clear" as const}
                  link={"#feature" as const}
                  size={"compact" as const}
                >
                  {"功能"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__dOXuz)}
                  color={"clear" as const}
                  link={"#price" as const}
                  size={"compact" as const}
                >
                  {"价格"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__insSm)}
                  color={"clear" as const}
                  link={`/plp`}
                  size={"compact" as const}
                >
                  {"English"}
                </Button>
              </React.Fragment>
            }
          />

          <Section
            data-plasmic-name={"topSection"}
            data-plasmic-override={overrides.topSection}
            className={classNames("__wab_instance", sty.topSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__a38V7)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gc4B4)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___6VAgA)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__k704C
                    )}
                  >
                    {"让布局工作变得"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__socVw
                    )}
                  >
                    {"更简短、更便捷、\n更可预测"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__brrqm
                  )}
                >
                  {"所有属性集中在一个地方，为你带来前所未有的掌控和速度。"}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___5GqPu)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button___0BJvr)}
                  color={"figma" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__yVnM)}
                      role={"img"}
                    />
                  }
                  link={
                    "https://www.figma.com/community/plugin/1065130523685842895/Pro-Layout-Panel" as const
                  }
                  showEndIcon={true}
                >
                  {"开启免费体验"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__f3GVb)}
                  color={"clear" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__de6I1)}
                      role={"img"}
                    />
                  }
                  link={
                    "https://www.figma.com/community/file/1089790476460041983/Pro-Layout-Panel-playground-(%E4%B8%AD%E6%96%87%E7%89%88)" as const
                  }
                >
                  {"Figma 中文游乐场"}
                </Button>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox___8U1P)}>
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"100%" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={
                    hasVariant(globalVariants, "screen", "mobile")
                      ? ("100%" as const)
                      : ("1024px" as const)
                  }
                  src={{
                    src: "/plasmic/pro_layout_panel_landing_pgae/images/frame10Png2.png",
                    fullWidth: 1920,
                    fullHeight: 960,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"solutions"}
            data-plasmic-override={overrides.solutions}
            className={classNames("__wab_instance", sty.solutions)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c3DzF
                )}
              >
                {
                  "Pro 布局面板完全重制了Figma的原生 UI，并保持了相同的直观性，为 Figma 的布局工作流程带来了深刻的改进。"
                }
              </div>
            }
            title={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__saEp6
                )}
                id={"feature" as const}
              >
                {"它能做什么?"}
              </div>
            }
          >
            <Reveal
              className={classNames("__wab_instance", sty.reveal__uMehs)}
              direction={"up" as const}
              duration={500 as const}
              effect={"fade" as const}
              triggerOnce={true}
            >
              <VideoExample
                className={classNames(
                  "__wab_instance",
                  sty.videoExample__h8BRn
                )}
                slot={
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__di5Bc
                      )}
                    >
                      {"最短路径"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nY1M
                      )}
                    >
                      {"没有弹出框和下拉菜单，一切都固定在它出现的地方"}
                    </div>
                  </React.Fragment>
                }
              >
                <Iframe
                  className={classNames("__wab_instance", sty.iframe__s6C9I)}
                  preview={true}
                  src={
                    "//player.bilibili.com/player.html?aid=979770454&bvid=BV1F44y1T7gD&cid=552280749&page=1" as const
                  }
                />
              </VideoExample>
            </Reveal>

            <Reveal
              className={classNames("__wab_instance", sty.reveal___6TFx7)}
              direction={"up" as const}
              duration={500 as const}
              effect={"fade" as const}
              triggerOnce={true}
            >
              <VideoExample
                className={classNames(
                  "__wab_instance",
                  sty.videoExample__dt4C8
                )}
                reversedLayout={true}
                slot={
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aAxZp
                      )}
                    >
                      {"稳定一致"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mdUty
                      )}
                    >
                      {"修复了大量古怪的 Figma 原生行为，让一切变得顺畅自然。"}
                    </div>
                  </React.Fragment>
                }
              >
                <Iframe
                  className={classNames("__wab_instance", sty.iframe__ajDh1)}
                  preview={true}
                  src={
                    "//player.bilibili.com/player.html?aid=254867021&bvid=BV1MY411n7Qw&cid=552285296&page=1" as const
                  }
                />
              </VideoExample>
            </Reveal>

            <Reveal
              className={classNames("__wab_instance", sty.reveal__pg1G5)}
              direction={"up" as const}
              duration={500 as const}
              effect={"fade" as const}
              triggerOnce={true}
            >
              <VideoExample
                className={classNames(
                  "__wab_instance",
                  sty.videoExample__uq6N2
                )}
                slot={
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pngNe
                      )}
                    >
                      {"突破极限"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nY1M
                      )}
                    >
                      {
                        "一些 Figma 原生支持的进阶功能无法通过 Figma 的原生 UI 实现，Pro 布局面板将他们完全解锁。"
                      }
                    </div>
                  </React.Fragment>
                }
              >
                <Iframe
                  className={classNames("__wab_instance", sty.iframe__ms4No)}
                  preview={true}
                  src={
                    "//player.bilibili.com/player.html?aid=594843390&bvid=BV1mq4y1e7Hi&cid=552290253&page=1" as const
                  }
                />
              </VideoExample>
            </Reveal>
          </Section>

          <Section
            data-plasmic-name={"howItWorks"}
            data-plasmic-override={overrides.howItWorks}
            className={classNames("__wab_instance", sty.howItWorks)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uoAnS
                )}
              >
                {"Pro 布局面板以效率提升为核心构建，因此它还涵盖了大量细节优化"}
              </div>
            }
            title={"更多亮点功能"}
          >
            <Reveal
              cascade={true}
              className={classNames("__wab_instance", sty.reveal___35Oi)}
              damping={0.5 as const}
              direction={"up" as const}
              duration={500 as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fYdkh)}
              >
                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__f1HCs
                  )}
                  description={
                    "⇧A、⌘Z 之类的快捷键即使在插件窗口内也仍​​然有效"
                  }
                  iconFront={
                    <Icon9Icon
                      className={classNames(projectcss.all, sty.svg__jDBq)}
                      role={"img"}
                    />
                  }
                  title={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___5Edgf
                      )}
                    >
                      {"快捷键支持"}
                    </div>
                  }
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__pqzdR
                  )}
                  description={
                    "属性之间互不干扰，你可以轻松地做出双向拥抱和拥抱缩放之类的高级布局"
                  }
                  iconFront={
                    <Icon6Icon
                      className={classNames(projectcss.all, sty.svg__hcQi8)}
                      role={"img"}
                    />
                  }
                  title={"独立属性编辑"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__hvAu
                  )}
                  description={
                    "输入框在拖拽时数字会落到最接近的 4 的倍数，按住 ⇧ 可更改为 8的倍数"
                  }
                  iconFront={
                    <Icon4Icon
                      className={classNames(projectcss.all, sty.svg__o4LIz)}
                      role={"img"}
                    />
                  }
                  title={"基于 4px 的拖拽"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__zn1U
                  )}
                  description={
                    "Padding 输入框支持以空格或逗号(半角字符)来分别设置两个数值"
                  }
                  iconFront={
                    <Icon10Icon
                      className={classNames(projectcss.all, sty.svg___6Tyir)}
                      role={"img"}
                    />
                  }
                  title={"独立 padding 值"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__jPr9
                  )}
                  description={
                    "添加AL时，子级图层的撑缩模式会保持不变，还可以直接决定父级撑缩模式"
                  }
                  iconFront={
                    <Icon2Icon
                      className={classNames(projectcss.all, sty.svg___6ZuDo)}
                      role={"img"}
                    />
                  }
                  title={"撑缩模式继承"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__p8Sue
                  )}
                  description={
                    "自由方向会保留自动布局内边距与元素间隔不丢失，以便调整后重新应用。"
                  }
                  iconFront={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__ewRNc)}
                      role={"img"}
                    />
                  }
                  title={"自由方向"}
                />
              </p.Stack>
            </Reveal>
          </Section>

          <Section
            data-plasmic-name={"pricingSection"}
            data-plasmic-override={overrides.pricingSection}
            className={classNames("__wab_instance", sty.pricingSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ryYxL
                )}
              >
                {
                  "该插件提供 14 天无限制免费试用，之后需要许可证密钥才能激活、一次性购买以供终身使用+免费更新。"
                }
              </div>
            }
            title={
              <p.PlasmicLink
                data-plasmic-name={"pricing"}
                data-plasmic-override={overrides.pricing}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.pricing
                )}
                component={Link}
                id={"price" as const}
                platform={"nextjs"}
              >
                {"一次购买 永久使用"}
              </p.PlasmicLink>
            }
          >
            <Reveal
              cascade={true}
              className={classNames("__wab_instance", sty.reveal__sO68T)}
              direction={"up" as const}
              duration={500 as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__iRjUt)}>
                  <Plan
                    className={classNames("__wab_instance", sty.plan__fY8Qq)}
                    description={
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__o6Uzz
                        )}
                      >
                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__kmeIg
                          )}
                        >
                          {"全部功能无限制"}
                        </Bullet>

                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__huyw8
                          )}
                        >
                          {"免费更新"}
                        </Bullet>
                      </p.Stack>
                    }
                    name={"初心者"}
                    name2={"14 天免费试用"}
                    price={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pKpI
                        )}
                      >
                        {"¥0"}
                      </div>
                    }
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__fi8Ak
                      )}
                      color={"outline" as const}
                      link={
                        "https://www.figma.com/community/plugin/1065130523685842895/Pro-Layout-Panel" as const
                      }
                    >
                      {"开始使用"}
                    </Button>
                  </Plan>
                </div>

                <div className={classNames(projectcss.all, sty.column__lzMt2)}>
                  <Plan
                    className={classNames("__wab_instance", sty.plan__eaUQm)}
                    color={"blue" as const}
                    description={
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__dNs9
                        )}
                      >
                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__xHUjC
                          )}
                        >
                          {"全部功能无限制"}
                        </Bullet>

                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__tXzdw
                          )}
                        >
                          {"免费更新"}
                        </Bullet>

                        <Bullet
                          className={classNames(
                            "__wab_instance",
                            sty.bullet__lr4PH
                          )}
                        >
                          {"技术支持"}
                        </Bullet>
                      </p.Stack>
                    }
                    name={"专业"}
                    name2={"一个账户"}
                    price={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___7NvfG
                        )}
                      >
                        {"¥63"}
                      </div>
                    }
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__zZ4Zh
                      )}
                      color={"figma" as const}
                      link={
                        "https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.50111deb2Qb6Cn&ft=t&id=670429733914" as const
                      }
                    >
                      {"立即购买"}
                    </Button>
                  </Plan>
                </div>
              </p.Stack>
            </Reveal>
          </Section>

          <Section
            data-plasmic-name={"howItWorks2"}
            data-plasmic-override={overrides.howItWorks2}
            className={classNames("__wab_instance", sty.howItWorks2)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3Q4Zd
                )}
              >
                {
                  "Pro layout panel 会持续收到更新以更好的简化你的布局工作流，以下是列在计划中的功能，很多都是由用户提出，这些功能将会在未来版本中上线，欢迎随时和我交流想法 :) "
                }
              </div>
            }
            title={"计划中的功能..."}
          >
            <Reveal
              cascade={true}
              className={classNames("__wab_instance", sty.reveal__yXpxh)}
              damping={0.5 as const}
              direction={"up" as const}
              duration={500 as const}
              triggerOnce={true}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___5LF6N)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__vNiQd)}
                >
                  <Icon5Icon
                    className={classNames(projectcss.all, sty.svg__zUpzX)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sli9A
                    )}
                  >
                    {"与 Figma Tokens 插件打通"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jqaN)}
                >
                  <Icon7Icon
                    className={classNames(projectcss.all, sty.svg__yyyD8)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__a7OEr
                    )}
                  >
                    {"Auto Layout v4.0 跟进更新"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ioamV)}
                >
                  <Icon11Icon
                    className={classNames(projectcss.all, sty.svg__rlQr)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yuGno
                    )}
                  >
                    {"输入框数学计算"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__olR9E)}
                >
                  <Icon15Icon
                    className={classNames(projectcss.all, sty.svg__e5VK)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6AFh
                    )}
                  >
                    {"常用功能菜单项以便快捷调用"}
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___47Ksy)}
                >
                  <Icon17Icon
                    className={classNames(projectcss.all, sty.svg__eKua)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jEaR8
                    )}
                  >
                    {"Nudge 数值自定义"}
                  </div>
                </p.Stack>
              </p.Stack>
            </Reveal>
          </Section>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "img",
    "solutions",
    "howItWorks",
    "pricingSection",
    "pricing",
    "columns",
    "howItWorks2",
    "footer"
  ],
  header: ["header"],
  topSection: ["topSection", "img"],
  img: ["img"],
  solutions: ["solutions"],
  howItWorks: ["howItWorks"],
  pricingSection: ["pricingSection", "pricing", "columns"],
  pricing: ["pricing"],
  columns: ["columns"],
  howItWorks2: ["howItWorks2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof Section;
  img: typeof p.PlasmicImg;
  solutions: typeof Section;
  howItWorks: typeof Section;
  pricingSection: typeof Section;
  pricing: "a";
  columns: "div";
  howItWorks2: typeof Section;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeChinese__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeChinese__VariantsArgs;
    args?: PlasmicHomeChinese__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeChinese__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeChinese__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomeChinese__ArgProps,
          internalVariantPropNames: PlasmicHomeChinese__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomeChinese__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeChinese";
  } else {
    func.displayName = `PlasmicHomeChinese.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeChinese = Object.assign(
  // Top-level PlasmicHomeChinese renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    img: makeNodeComponent("img"),
    solutions: makeNodeComponent("solutions"),
    howItWorks: makeNodeComponent("howItWorks"),
    pricingSection: makeNodeComponent("pricingSection"),
    pricing: makeNodeComponent("pricing"),
    columns: makeNodeComponent("columns"),
    howItWorks2: makeNodeComponent("howItWorks2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomeChinese
    internalVariantProps: PlasmicHomeChinese__VariantProps,
    internalArgProps: PlasmicHomeChinese__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomeChinese;
/* prettier-ignore-end */
