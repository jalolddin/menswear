export default function ({ $axios, app, store }) {
  $axios.onRequest((config) => {
    config.headers = {
      ...config.headers,
      'Content-Type': config.headers['Content-Type'] || 'application/json',
      Accept: 'application/json'
    }

    return config
  })

  $axios.onResponse((res) => {
    if (!res?.data?.success && 'success' in res?.data && !res.config.ignoreErrors) {
      store?._vm?.$bvToast.toast(res?.message, {
        title: 'An error occurred :(',
        variant: 'danger'
      })
    }
    return res
  })

  $axios.onError((err) => {
    if (err?.message === 'Unauthorized') {
      if (!app.ExpiredAuthSessionError) {
        store?._vm?.$bvToast.toast('Please authorize. Your session is over', {
          variant: 'info'
        })
      }
      app.ExpiredAuthSessionError = true
      app.router?.push(app.localePath('/auth/login'))
      return Promise.resolve({
        data: {
          success: false
        }
      })
    }
    if (err?.name === 'TypeError' || err?.message === 'canceled') {
      return Promise.resolve({
        data: {
          success: false
        }
      })
    }
    if (err.config.ignoreErrors) {
      return Promise.resolve({
        data: {
          success: false
        }
      })
    }
    if (err.response?.status === 424) {
      return Promise.resolve({
        data: {
          success: false
        }
      })
    }
    store?._vm?.$bvToast.toast(`${
      err?.response?.data?.message ||
      err?.message ||
      'Error'}`, {
      title: 'An error occurred :(',
      variant: 'danger'
    })
    return Promise.resolve({
      data: {
        success: false
      }
    })
  })
}
