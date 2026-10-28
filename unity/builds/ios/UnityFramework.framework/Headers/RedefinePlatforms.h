

#ifndef DETAIL__PLATFORMS_HAD_BEEN_UNDEFINED_BY_UNDEFINEPLATFORMS_H
    #error "RedefinePlatforms.h can only be used after UndefinePlatforms.h got included before."
#endif

#undef DETAIL__PLATFORMS_HAD_BEEN_UNDEFINED_BY_UNDEFINEPLATFORMS_H

#undef PLATFORM_IOS
#if defined(DETAIL__TEMP_PLATFORM_IOS_WAS_1)
    #undef DETAIL__TEMP_PLATFORM_IOS_WAS_1
    #define PLATFORM_IOS 1
#else
    #define PLATFORM_IOS 0
#endif

#undef PLATFORM_TVOS
#if defined(DETAIL__TEMP_PLATFORM_TVOS_WAS_1)
    #undef DETAIL__TEMP_PLATFORM_TVOS_WAS_1
    #define PLATFORM_TVOS 1
#else
    #define PLATFORM_TVOS 0
#endif

#undef PLATFORM_VISIONOS
#if defined(DETAIL__TEMP_PLATFORM_VISIONOS_WAS_1)
#undef DETAIL__TEMP_PLATFORM_VISIONOS_WAS_1
#define PLATFORM_VISIONOS 1
#else
#define PLATFORM_VISIONOS 0
#endif
