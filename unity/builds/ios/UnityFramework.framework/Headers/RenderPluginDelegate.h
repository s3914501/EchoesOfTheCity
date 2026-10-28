#pragma once

#import <UnityFramework/LifeCycleListener.h>

struct UnityDisplaySurfaceBase; 
struct RenderingSurfaceParams;  


@protocol RenderPluginDelegate<LifeCycleListener, NSObject>

@required

- (void)mainDisplayInited:(struct UnityDisplaySurfaceBase*)surface;

@optional


- (void)onBeforeMainDisplaySurfaceRecreate:(struct RenderingSurfaceParams*)params;


- (void)onAfterMainDisplaySurfaceRecreate;

 
@interface RenderPluginDelegate : NSObject<RenderPluginDelegate>
{
    struct UnityDisplaySurfaceBase* mainDisplaySurface;
}
- (void)mainDisplayInited:(struct UnityDisplaySurfaceBase*)surface;
@end



@interface RenderPluginArrayDelegate : RenderPluginDelegate
{
    NSArray* delegateArray;
}
@property(nonatomic, retain) NSArray* delegateArray;
- (void)mainDisplayInited:(struct UnityDisplaySurfaceBase*)surface;
- (void)onBeforeMainDisplaySurfaceRecreate:(struct RenderingSurfaceParams*)params;
- (void)onAfterMainDisplaySurfaceRecreate;
- (void)onFrameResolved;

- (void)didBecomeActive:(NSNotification*)notification;
- (void)willResignActive:(NSNotification*)notification;
- (void)didEnterBackground:(NSNotification*)notification;
- (void)willEnterForeground:(NSNotification*)notification;
- (void)willTerminate:(NSNotification*)notification;
@end
