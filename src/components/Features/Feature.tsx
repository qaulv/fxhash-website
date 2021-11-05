import style from "./Features.module.scss"
import cs from "classnames"
import { TokenFeature, TokenFeatureValueType } from "../../types/Metadata"
import { getMutezDecimalsNb } from "../../utils/math"


interface Props {
  feature: TokenFeature
}

function displayFeatureValue(value: TokenFeatureValueType) {
  const type = typeof value
  switch (type) {
    case "boolean":
      return value ? "true" : "false"
    case "number":
      return value.toString()
    case "string":
    default:
      return value
  }
}

export function Feature({ feature }: Props) {
  return (
    <article className={cs(style.feature)}>
      <div className={cs(style.details)}>
        <strong>{ feature.name }</strong>
        <span>{ displayFeatureValue(feature.value) }</span>
      </div>
      {feature.rarity && (
        <div className={cs(style.rarity)}>
          { feature.rarity.toString() }
        </div>
      )}
    </article>
  )
}