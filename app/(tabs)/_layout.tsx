import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: 'Home' }}
      />
      <Tabs.Screen
        name="players"
        options={{ headerShown: false, title: 'Players' }}
      />
    </Tabs>
  )
}

export default _layout