  it('open page', async () => {
    await browser.url('/login')
  })

  it('performance audit', async () => { await browser.performAudit(await browser.getUrl()) })

  it('fill login form', async () => {
    const userElm = await $('#username')
    await userElm.setValue(browser.config.username)

    const passElm = await $('#password')
    await passElm.setValue(browser.config.password)
  })

  it('login user', async () => {
    const buttonElm = await $('button[type="submit"]')
    buttonElm.click()

    await expect($('#flash')).toBeExisting()
    await expect($('#flash')).toHaveTextContaining(
        'You logged into a secure area!')
  })

  it('performance audit', async () => { await browser.performAudit(await browser.getUrl()) })
})
