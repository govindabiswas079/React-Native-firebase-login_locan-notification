import { View, Text } from 'react-native'
import React from 'react'
import {
  getAndroidId,
  getApiLevel,
  getApplicationName,
  getAvailableLocationProviders,
  getBaseOs,
  getBuildId,
  getBatteryLevel,
  getBootloader,
  getBrand,
  getBuildNumber,
  getBundleId,
  isCameraPresent,
  getCarrier,
  getCodename,
  getDevice,
  getDeviceId,
  getDeviceType,
  getDisplay,
  getDeviceName,
  getDeviceToken,
  getFirstInstallTime,
  getFingerprint,
  getFontScale,
  getFreeDiskStorage,
  getFreeDiskStorageOld,
  getHardware,
  getHost,
  getIpAddress,
  getIncremental,
  getInstallerPackageName,
  getInstallReferrer,
  getInstanceId,
  getLastUpdateTime,
  getMacAddress,
  getManufacturer,
  getMaxMemory,
  getModel,
  getPhoneNumber,
  getPowerState,
  getProduct,
  getPreviewSdkInt,
  getReadableVersion,
  getSerialNumber,
  getSecurityPatch,
  getSystemAvailableFeatures,
  getSystemName,
  getSystemVersion,
  getTags,
  getType,
  getTotalDiskCapacity,
  getTotalDiskCapacityOld,
  getTotalMemory,
  getUniqueId,
  getUsedMemory,
  getUserAgent,
  getUserAgentSync,
  getVersion,
  getBrightness,
  hasGms,
  hasHms,
  hasNotch,
  hasDynamicIsland,
  hasSystemFeature,
  isAirplaneMode,
  isBatteryCharging,
  isEmulator,
  isKeyboardConnected,
  isLandscape,
  isLocationEnabled,
  isMouseConnected,
  isHeadphonesConnected,
  isPinOrFingerprintSet,
  isTablet,
  isDisplayZoomed,
  isTabletMode,
  supported32BitAbis,
  supported64BitAbis,
  supportedAbis,
  syncUniqueId,
} from 'react-native-device-info';

const DeviceInformations = () => {
  getAndroidId()
    .then((response) => {
      console.log('getAndroidId,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getApiLevel()
    .then((response) => {
      console.log('getApiLevel,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const AppName = getApplicationName()
  console.log('AppName,', AppName)
  getAvailableLocationProviders()
    .then((response) => {
      console.log('getAvailableLocationProviders,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getBaseOs()
    .then((response) => {
      console.log('getBaseOs,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getBuildId()
    .then((response) => {
      console.log('getBuildId,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getBatteryLevel()
    .then((response) => {
      console.log('getBatteryLevel,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getBootloader()
    .then((response) => {
      console.log('getBootloader,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const BrandName = getBrand()
  console.log('BrandName,', BrandName)
  const BuildNumber = getBuildNumber()
  console.log('BuildNumber,', BuildNumber)
  const BundleId = getBundleId()
  console.log('BundleId,', BundleId)
  isCameraPresent()
    .then((response) => {
      console.log('isCameraPresent,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getCarrier()
    .then((response) => {
      console.log('getCarrier,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getCodename()
    .then((response) => {
      console.log('getCodename,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getDevice()
    .then((response) => {
      console.log('getDevice,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const DeviceId = getDeviceId()
  console.log('DeviceId,', DeviceId)
  const DeviceType = getDeviceType()
  console.log('DeviceType,', DeviceType)
  getDisplay()
    .then((response) => {
      console.log('getDisplay,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getDeviceName()
    .then((response) => {
      console.log('getDeviceName,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getDeviceToken()
    .then((response) => {
      console.log('getDeviceToken,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getFirstInstallTime()
    .then((response) => {
      console.log('getFirstInstallTime,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getFingerprint()
    .then((response) => {
      console.log('getFingerprint,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getFontScale()
    .then((response) => {
      console.log('getFontScale,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getFreeDiskStorage()
    .then((response) => {
      console.log('getFreeDiskStorage,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getFreeDiskStorageOld()
    .then((response) => {
      console.log('getFreeDiskStorageOld,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getHardware()
    .then((response) => {
      console.log('getHardware,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getHost()
    .then((response) => {
      console.log('getHost,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getIpAddress()
    .then((response) => {
      console.log('getIpAddress,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getIncremental()
    .then((response) => {
      console.log('getIncremental,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getInstallerPackageName()
    .then((response) => {
      console.log('getInstallerPackageName,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getInstallReferrer()
    .then((response) => {
      console.log('getInstallReferrer,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getInstanceId()
    .then((response) => {
      console.log('getInstanceId,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getLastUpdateTime()
    .then((response) => {
      console.log('getLastUpdateTime,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getMacAddress()
    .then((response) => {
      console.log('getMacAddress,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getManufacturer()
    .then((response) => {
      console.log('getManufacturer,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getMaxMemory()
    .then((response) => {
      console.log('getMaxMemory,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const Model = getModel()
  console.log('Model,', Model)
  getPhoneNumber()
    .then((response) => {
      console.log('getPhoneNumber,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getPowerState()
    .then((response) => {
      console.log('getPowerState,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getProduct()
    .then((response) => {
      console.log('getProduct,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getPreviewSdkInt()
    .then((response) => {
      console.log('getPreviewSdkInt,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const ReadableVersion = getReadableVersion()
  console.log('ReadableVersion,', ReadableVersion)
  getSerialNumber()
    .then((response) => {
      console.log('getSerialNumber,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getSecurityPatch()
    .then((response) => {
      console.log('getSecurityPatch,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getSystemAvailableFeatures()
    .then((response) => {
      console.log('getSystemAvailableFeatures,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const SystemName = getSystemName()
  console.log('SystemName', SystemName)
  const SystemVersion = getSystemVersion()
  console.log('SystemVersion', SystemVersion)
  getTags()
    .then((response) => {
      console.log('getTags,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getType()
    .then((response) => {
      console.log('getType,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getTotalDiskCapacity()
    .then((response) => {
      console.log('getTotalDiskCapacity,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getTotalDiskCapacityOld()
    .then((response) => {
      console.log('getTotalDiskCapacityOld,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getTotalMemory()
    .then((response) => {
      console.log('getTotalMemory,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getUniqueId()
    .then((response) => {
      console.log('getUniqueId,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getUsedMemory()
    .then((response) => {
      console.log('getUsedMemory,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  getUserAgent()
    .then((response) => {
      console.log('getUserAgent,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const UserAgentSync = getUserAgentSync()
  console.log('UserAgentSync,', UserAgentSync)
  const Version = getVersion()
  console.log('Version,', Version)
  getBrightness()
    .then((response) => {
      console.log('getBrightness,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  hasGms()
    .then((response) => {
      console.log('hasGms,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  hasHms()
    .then((response) => {
      console.log('hasHms,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const Notch = hasNotch()
  console.log('Notch,', Notch)
  const DynamicIsland = hasDynamicIsland()
  console.log('DynamicIsland,', DynamicIsland)
  hasSystemFeature()
    .then((response) => {
      console.log('hasSystemFeature,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isAirplaneMode()
    .then((response) => {
      console.log('isAirplaneMode,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isBatteryCharging()
    .then((response) => {
      console.log('isBatteryCharging,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isEmulator()
    .then((response) => {
      console.log('isEmulator,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isKeyboardConnected()
    .then((response) => {
      console.log('isKeyboardConnected,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isLandscape()
    .then((response) => {
      console.log('isLandscape,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isLocationEnabled()
    .then((response) => {
      console.log('isLocationEnabled,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isMouseConnected()
    .then((response) => {
      console.log('isMouseConnected,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isHeadphonesConnected()
    .then((response) => {
      console.log('isHeadphonesConnected,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  isPinOrFingerprintSet()
    .then((response) => {
      console.log('isPinOrFingerprintSet,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  const Tablet = isTablet()
  console.log('Tablet,', Tablet)
  const DisplayZoomed = isDisplayZoomed()
  console.log('DisplayZoomed,', DisplayZoomed)
  isTabletMode()
    .then((response) => {
      console.log('isTabletMode,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  supported32BitAbis()
    .then((response) => {
      console.log('supported32BitAbis,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  supported64BitAbis()
    .then((response) => {
      console.log('supported64BitAbis,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  supportedAbis()
    .then((response) => {
      console.log('supportedAbis,', response)
    })
    .catch((error) => {
      console.log(error)
    })
  syncUniqueId()
    .then((response) => {
      console.log('syncUniqueId,', response)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default DeviceInformations