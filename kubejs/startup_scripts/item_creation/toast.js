StartupEvents.registry('item', event => {
  event.create('toast')
  .displayName('Perfect Toast')
  .rarity('chromatic')
  .food(food => {
    food
      .hunger(20)
      .saturation(1000)
      .eaten(ctx => {
        ctx.item.count++
      })
  })
})