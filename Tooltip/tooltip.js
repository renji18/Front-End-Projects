const selector = document.querySelector('#text')
const tooltipText = selector.dataset.tooltip
const body = document.body
const DEFAULT_SPACING = 5
const POSITION_ORDER = ["top", 'bottom', "left", 'right']

const POSITION_ORDER_TO_FUNCTION_MAP = {
    top: positionTooltipTop,
    bottom: positionTooltipBottom,
    left: positionTooltipLeft,
    right: positionTooltipRight,
}

const tooltipContainer = document.createElement('div')
tooltipContainer.classList.add('tooltip-container')
body.append(tooltipContainer)

selector.addEventListener('mouseenter', e => {
    const accessTooltip = createTooltip(e.target.dataset.tooltip)
    tooltipContainer.append(accessTooltip)
    positionTooltip(accessTooltip, e.target)
    e.target.addEventListener('mouseleave', ()=>{
        accessTooltip.remove()
    }, {once: true})
})

function createTooltip(text){
    const tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    tooltip.textContent = text;
    return tooltip
}

function positionTooltip(tooltip, element){
    const elementRect = element.getBoundingClientRect()
    const spacing = parseInt(element.dataset.spacing) || DEFAULT_SPACING
    const prefferedOrder = (element.dataset.positions || "").split('|')
    const positions = prefferedOrder.concat(POSITION_ORDER)
    for(let i=0; i<positions.length; i++){
        const func = POSITION_ORDER_TO_FUNCTION_MAP[positions[i]]
        if(func && func(tooltip, elementRect, spacing)){
            return
        }
    }
}

function positionTooltipRight(tooltip, elementRect, spacing){
    const tooltipRect = tooltip.getBoundingClientRect()
    tooltip.style.top = `${elementRect.top + elementRect.height/2 - tooltipRect.height/2}px`
    tooltip.style.left = `${elementRect.right + spacing}px`
    const bounds = isOutOfBounds(tooltip, spacing)
    if(bounds.right){
        resetToolTipPosition(tooltip)
        return false
    }
    if(bounds.bottom){
        tooltip.style.bottom = `${spacing}px`
        tooltip.style.top = 'initial'
    }
    if(bounds.top){
        tooltip.style.top = `${spacing}px`
    }
    return true
}

function positionTooltipLeft(tooltip, elementRect, spacing){
    const tooltipRect = tooltip.getBoundingClientRect()
    tooltip.style.top = `${elementRect.top + elementRect.height/2 - tooltipRect.height/2}px`
    tooltip.style.left = `${elementRect.left - tooltipRect.width - spacing}px`
    const bounds = isOutOfBounds(tooltip, spacing)
    if(bounds.left){
        resetToolTipPosition(tooltip)
        return false
    }
    if(bounds.bottom){
        tooltip.style.bottom = `${spacing}px`
        tooltip.style.top = 'initial'
    }
    if(bounds.top){
        tooltip.style.top = `${spacing}px`
    }
    return true
}

function positionTooltipBottom(tooltip, elementRect, spacing){
    const tooltipRect = tooltip.getBoundingClientRect()
    tooltip.style.top = `${elementRect.bottom + spacing}px`

    tooltip.style.left = `${elementRect.left + elementRect.width/2 - tooltipRect.width/2}px`
    const bounds = isOutOfBounds(tooltip, spacing)
    if(bounds.bottom){
        resetToolTipPosition(tooltip)
        return false
    }
    if(bounds.right){
        tooltip.style.right = `${spacing}px`
        tooltip.style.left = 'initial'
    }
    if(bounds.left){
        tooltip.style.left = `${spacing}px`
    }
    return true
}

function positionTooltipTop(tooltip, elementRect, spacing){
    const tooltipRect = tooltip.getBoundingClientRect()
    tooltip.style.top = `${elementRect.top - tooltipRect.height -spacing}px`
    tooltip.style.left = `${elementRect.left + elementRect.width/2 - tooltipRect.width/2}px`
    const bounds = isOutOfBounds(tooltip, spacing)
    if(bounds.top){
        resetToolTipPosition(tooltip)
        return false
    }
    if(bounds.right){
        tooltip.style.right = `${spacing}px`
        tooltip.style.left = 'initial'
    }
    if(bounds.left){
        tooltip.style.left = `${spacing}px`
    }
    return true
}

function resetToolTipPosition(tooltip){
    tooltip.style.top = 'initial'
    tooltip.style.bottom = 'initial'
    tooltip.style.left = 'initial'
    tooltip.style.right = 'initial'
}

function isOutOfBounds(element, spacing){
    const rect = element.getBoundingClientRect()
    const containerRect = tooltipContainer.getBoundingClientRect()
    return {
        left: rect.left <= containerRect.left + spacing,
        right: rect.right >= containerRect.right - spacing,
        top: rect.top <= containerRect.top + spacing,
        bottom: rect.bottom >= containerRect.bottom - spacing
    }
}